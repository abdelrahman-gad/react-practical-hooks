import cx from 'classnames';
import { Component ,useState,useEffect } from 'react';

export default class LikeDislike extends Component {
    state={
        articleId:0,
        reacts:[ 
            {id:0, userId:0 ,   articleId:0, value:true},
            {id:1, userId:1,    articleId:0,value:false}
         ]
    }
    render() {
        const { reacts } = this.state;
        const likes = reacts.filter(react=>react.value===true).length;
        const dislikes = reacts.filter(react=>react.value===false).length;
        const reactToArticle=(articleId,type)=>{
            if(type==='like'){
                const newReacts = [];
                // this.state(...this.state,reacts:newReacts);
            }
        }
    
        return (
            <>
                <div>
                    <h2>Like/Dislike</h2>
                   
                    <button onClick={()=>reactToArticle(0,'like')} class="like-button">    Like  | <span class="liked"> {likes}  </span> </button>
                    <button onClick={()=>reactToArticle(0,'dislike')} class="dislike-button" > Dislike | <span class="disliked"> {dislikes} </span>   </button>
                </div>
 

                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
            </>
        );
    }
}