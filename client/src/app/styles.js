import styled, { injectGlobal } from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  
  max-width: 700px;
  margin: auto;
`;

export const AppContent = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

injectGlobal`
	* {
		box-sizing: border-box;
	}
`;
