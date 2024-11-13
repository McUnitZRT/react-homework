import './css/Hat.css';

export const Hat = ({user_name,id_post}) => {
    return(
      <div id="chapter_1">
        <h1>Post №{id_post}. User: {user_name}</h1> 
      </div>
    );
}