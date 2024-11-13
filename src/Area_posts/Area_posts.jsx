import {Hat} from './components/Hat';
import {Body} from './components/Body';
import './Area_posts.css';

import { useEffect, useState } from "react";

export const Area_posts = () => {

    const [name_user,setName] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()),
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
        ])
        .then(([usersData, postsData]) => {
            setName(usersData);
            setPosts(postsData);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, []);

    const FgetName = (User_id) => {
        const  User_name = name_user.find(item_1 => item_1.id === User_id);
        return User_name ? User_name.username : "Нет имени";
    }

    const List_posts = () => {
        return(
              <>
                {posts.map(post => {
                    const getName = FgetName(post.userId);
                    return(
                        <div key={post.id} id='card_post'>
                            <Hat user_name = {getName} id_post={post.id}/>
                            <Body title_post = {post.title} body_post = {post.body} /> 
                        </div>
                    );
                })}
              </>
        );
    };
    
    return(
        <div id='area'>
            <List_posts />
        </div>
    );
    
}
export default Area_posts;