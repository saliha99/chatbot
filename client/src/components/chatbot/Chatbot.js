import React, {Component} from 'react';
import axios from 'axios/index';
import Message from './Message';

class Chatbot extends Component {
    messagesEnd;
    constructor(props) {
        super(props);
        this._handleInputKeyPress=this._handleInputKeyPress.bind(this);
        this.state={
            messages:[]
        }
    }

    async df_text_query(text){
        let says={
            speaks:'me',
            msg:{
                text:{
                    text:text
                }
            }
        };

        this.setState({messages: [...this.state.messages, says]});
        const res=await axios.post('/api/df_text_query', {text});

        for(let msg of res.data.fulfillmentMessages){
            says={
                speaks:'bot',
                msg:msg
            }
            this.setState({messages:[...this.state.messages,says]});
        }
    }

    async df_event_query(event){
        const res=await axios.post('/api/df_event_query', {event});
        for(let msg of res.data.fulfillmentMessages){
            let says={
                speaks:'bot',
                msg:msg
            }
            this.setState({ messages: [...this.state.messages, says]})
        }

    }

    componentDidMount(){
        this.df_event_query('Welcome');
    }

    componentDidUpdate(){
        this.messagesEnd.scrollIntoView({behaviour:"snooth"});

    }

    renderMessages(stateMessages) {
        if(stateMessages){
            return stateMessages.map((message,i)=>{
                return <Message key={i} speaks={message.speaks} text={message.msg.text.text}/>
            });
        } else {
            return null;
        }
    }

    _handleInputKeyPress(e){
        if(e.key==='Enter'){
            this.df_text_query(e.target.value);
            e.target.value='';
        }
    }

    render() {
        return(
            <div className='chatbot_container'>
                <div id='chatbot' >
                    <h2>Chatbot</h2>
                    {this.renderMessages(this.state.messages)}
                    <div ref={(el)=>{this.messagesEnd=el;}}
                        style={{float:'left',clear:'both'}}>
                    </div>
                    <input type="text" onKeyPress={this._handleInputKeyPress} />
                </div>
            </div>
        )
    }
}

export default Chatbot; 