import styled from 'styled-components'

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