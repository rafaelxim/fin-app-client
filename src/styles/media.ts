import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  400: '400px',
  820: '820px',
  1200: '1200px',
  1400: '1400px',
});

export default customMedia;

// const Box = styled.div`
//   font-size: 20px;

//   ${customMedia.lessThan("tablet")`
//     /* for screen sizes less than 60em */
//     font-size: 15px;
//   `};
// `;
