import './widget.scss'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Person2Icon from '@mui/icons-material/Person2';
const Widget = ({type}) => {
    let data;
    const amount =100
    const diff = 20
    switch(type){
        case "user":
            data ={ 
                    title:"USERS",
                    isMoney:false,
                    link:"See all users",
                    icon: <Person2Icon className='icon' style={{color:"crisom", backgroundColor:"rgba(255,0,0,0.2)"}}/>,
            };
        break
        case "order":
            data ={ 
                    title:"ORDER",
                    isMoney:true,
                    link:"See all border",
                    icon: <Person2Icon className='icon'  style={{color:"crisom", backgroundColor:"rgba(255,0,0,0.2)"}}/>,
            };
        break
        case "earning":
            data ={ 
                    title:"EARNING",
                    isMoney:true,
                    link:"See all earnings",
                    icon: <Person2Icon className='icon'  style={{color:"crisom", backgroundColor:"rgba(255,0,0,0.2)"}}/>,
            };
        break
        case "balance":
            data ={ 
                    title:"BALANCE",
                    isMoney:true,
                    link:"See all balance",
                    icon: <Person2Icon className='icon'  style={{color:"crisom", backgroundColor:"rgba(255,0,0,0.2)"}}/>,
            };
        break
        
            default:
            break
    }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardDoubleArrowUpIcon/>
                {data.diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget