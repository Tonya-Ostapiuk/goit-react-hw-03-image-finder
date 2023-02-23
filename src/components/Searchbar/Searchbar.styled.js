import styled from 'styled-components';

export const SearchbarStyled = styled.header `
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #12847c;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

  

export const SearchFormStyled = styled.form `
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
`
   
  
  
  export const SearchFormBtnStyled = styled.button `
  width: 55px;
  height:55px;
  padding: 20px;
  background: #92c9c2;
  color: rgb(1, 23, 33);
  border: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  cursor: pointer;
    &:hover{
        opacity: 1;
        background: #bbf4f4ce;
    }
  `

  
  export const SearchFormInputStyled = styled.input `
  padding: 10px;
  font-size: 15px;
  border: none;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  width: 600px;
  height:55px;
  outline: none;
  background: #f7fafc;
    &::placeholder {
        font: inherit;
        font-size: 18px;
  }
  `
   