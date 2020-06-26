import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 300px;
    margin: 50px 50px 0 50px;
    background-color: rgba(26, 30, 35, .8);
    h3 {
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 2rem;
        text-align: center;
        text-decoration: none;
        width: 100%;
        color: rgb(243, 243, 243);
        background: rgba(26, 30, 35, .4);
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    img {
        position: absolute;
        display: block;
        width: 100%;
        max-width: 200px;
        max-height: 100%;
        opacity: .9; 
        overflow: auto;
    }
`;

function Categories(props) {
    // const [categories, setCategories] = useState([])

    // useEffect(() => {
    //     axiosWithAuth()
    //     .get('/products/cat')
    //     .then(res => {
    //         console.log(res)
    //         setCategories(res.data)
    //     })
    //     .catch(err => {
    //         console.log('error', err)
    //     })
    // }, [])

    useEffect(() => {
        const appStyle = document.querySelector('.auth-wrapper')
        const login = document.querySelectorAll('.nav-link')
        
        appStyle.classList.add('authToggle')
        login[0].addEventListener('click', () => {
            appStyle.classList.remove('authToggle')
        })
        login[1].addEventListener('click', () => {
        })
        login[2].addEventListener('click', () => {
            appStyle.classList.remove('authToggle')
        })
    }, [])

    console.log(props.cards)
    
    
    return (
        <div>
            {props.cards.map(item => {
                console.log(`/categories/${item.category_name}`)
                return (                    
                    <Link to={`/categories/${item.id}`} style={{cursor: 'auto'}} >
                        <Card style={{cursor: 'pointer'}} key={item.id}>
                            <h3>{item.category_name}</h3>
                            {/* <img src={item.url} alt='marketplace category' /> */}
                        </Card>
                    </Link>                                    
                )
            })}
        </div>
    )
}

export default Categories