import { createSlice } from '@reduxjs/toolkit';

const exampleText=`
  Heading
  =======
  
  Sub-heading
  -----------
  
  ### Another deeper heading
  
  Paragraphs are separated
  by a blank line.
  
  Leave 2 spaces at the end of a line to do a
  line break
  
  Text attributes *italic*, **bold**, ___italic and bold___ , \`monospace\`, ~~strikethrough~~ .
  
  * Shopping list:

    * apples
    * oranges
    * pears
  
  Numbered list:
  
    1. apples
    2. oranges
    3. pears
  
  The rain---not the reign---in
  Spain.
  
   *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`

   const initialText="this is user input";

const initialState = {
  value: initialText,
  exampleText,
  isExampleTextShown:false,
  status: 'idle',
};

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
   toggleExampleText: (state) => {
      state.isExampleTextShown=!state.isExampleTextShown;
      state.isExampleTextShown ? state.value=exampleText: state.value=initialText;
    },
    setText:(state,action) => {
     state.value=action.payload;
    },
  },
});

export const { toggleExampleText,setText } = textSlice.actions;

export const textSelector = (state) => state.text.value;
export const exampleVisibilitySelector=(state) => state.text.isExampleTextShown;

export default textSlice.reducer;
