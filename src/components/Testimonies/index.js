import React from 'react';
import Testimony from './Testimony';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.2em;
    margin: 5em 0em;
    padding: 0 4em;
`;
export const Line = styled.hr`
    display: flex;
    height: 1px;
    width: 80%;
    border: 0;
    border-top: 1px solid #ccc;
    padding: 0;
`;
const Testimonies = () => {
    const Comments = [
        {
            "name": "Maria",
            "title": "Database Manager",
            "comment": "Saya beruntung bergabung ke kursus di Arkademi. Metode penyampaian sangat jelas singkat dan memudahkan belajar. Ditambah lagi tampilan presentasi yang membuat kita tidak jenuh dalam belajar online.",
            "picture": "/image/maria.svg",
        },
        {
            "name": "Firmansyah",
            "title": "Database Manager",
            "comment": "Saya beruntung bergabung ke kursus di Arkademi. Metode penyampaian sangat jelas singkat dan memudahkan belajar. Ditambah lagi tampilan presentasi yang membuat kita tidak jenuh dalam belajar online.",
            "picture": "/image/firmansyah.svg",
        },
        {
            "name": "Friska",
            "title": "Database Manager",
            "comment": "Saya beruntung bergabung ke kursus di Arkademi. Metode penyampaian sangat jelas singkat dan memudahkan belajar. Ditambah lagi tampilan presentasi yang membuat kita tidak jenuh dalam belajar online.",
            "picture": "/image/friska.svg",
        },
       
    ];

    const CommentItems = Comments.map((content,i) => (
        <Testimony key={i} content={content}/>
    ))

  return (
    <>
        <Wrapper>
            {CommentItems}
        </Wrapper>
        <Line/>
    </>
  );
};
  
export default Testimonies;