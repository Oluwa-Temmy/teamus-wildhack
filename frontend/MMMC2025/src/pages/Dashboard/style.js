import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Aside = styled.main`
  margin-left: 200px; /* largura da navbar */
  padding: 40px;
  width: calc(100vw - 200px);
  height: 100vh;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 21px;
  }
`;

export const DashboardCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  color: black;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;


export const MatchBtn = styled.button`
  background-color: ${({ theme }) => theme.COLORS.GOLD};
  color: black;
  text-transform: uppercase;
  
  padding: 20px;
  font-size: 21px;
  width: 100%;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #fef8f2;
    scale: 1.01;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l11 2s infinite;
  margin: auto;
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;

  @keyframes l11 {
    0%   {background: conic-gradient(#fff 0     ,#0000 0)}
    12.5%{background: conic-gradient(#fff 45deg ,#0000 46deg)}
    25%  {background: conic-gradient(#fff 90deg ,#0000 91deg)}
    37.5%{background: conic-gradient(#fff 135deg,#0000 136deg)}
    50%  {background: conic-gradient(#fff 180deg,#0000 181deg)}
    62.5%{background: conic-gradient(#fff 225deg,#0000 226deg)}
    75%  {background: conic-gradient(#fff 270deg,#0000 271deg)}
    87.5%{background: conic-gradient(#fff 315deg,#0000 316deg)}
    100% {background: conic-gradient(#fff 360deg,#0000 360deg)}
  }
`;