import styled from "styled-components";

export const HeaderContainer = styled.div`
margin-top: 3vh;
/* background-color: skyblue; */
height: 15vh; 
display: flex;
flex-direction: column;
align-items: center;
form{
    display: flex;
    flex-direction: row;
}

#textfield {
    padding: 4px;
    margin-top: 35px; 
}

#tweetbutton {
    display: flex;
    margin-top: 40px;
    height: 50px;
    width: 120px;
    align-items: center; 
    justify-content: center; 
    margin-left: 2vw;

    Button{
        height: 100%; 
        width: 100%;
    }

}
`