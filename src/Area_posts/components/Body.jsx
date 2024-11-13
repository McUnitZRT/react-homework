import './css/Body.css';

export const Body = ({title_post,body_post}) => {
    return(
        <div id="chapter_2">
        <h3>Title:</h3>
        <p>{title_post}</p>
        <h3>Body:</h3> 
        <p>{body_post}</p>
        </div>
    );
}