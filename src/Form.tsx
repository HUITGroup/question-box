import { useState } from 'react';
import {
  Button,
  TextField,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
import styled from 'styled-components';
import functions from 'firebase-functions';

const handleSubmit = (questionMessage: string) => {
  const URL: string = functions.config().discord_webhook.url;
  axios.post(URL, { content: questionMessage }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

function Form() {
  const [questionBody, setQuestionBody] = useState<string>('');
  const [sucssess, setSucssess] = useState<boolean>(false);
  const [emptyError, setEmptyError] = useState<boolean>(false);

  return (
    <div>
      <TextContainer>
        <TextField
          value={questionBody}
          placeholder='質問を入力してください'
          fullWidth={true}
          multiline
          rows={5}
          size={'medium'}
          rowsMax={10}
          variant={'outlined'}
          onChange={(event: any) => {
            setQuestionBody(event.target.value);
          }}
        />
      </TextContainer>

      <ButtonContainer>
        <Button
          size={'large'}
          color={'primary'}
          variant={'contained'}
          onClick={() => {
            if (questionBody) {
              handleSubmit(questionBody);
              setEmptyError(false);
              setSucssess(true);
              setQuestionBody('')
            } else {
              setSucssess(false);
              setEmptyError(true);
            }
          }}>
          SEND
        </Button>
      </ButtonContainer>

      <ResultContainer>
        {sucssess ? (
          <Alert severity="success">質問が送信されました。</Alert>
        ) : null}
        {emptyError ? (
          <Alert severity="error">質問を入力してください。</Alert>
        ) : null}
      </ResultContainer>
    </div>
  );
}

const TextContainer = styled.div`
  margin: 30px
`
const ButtonContainer = styled.div`
  margin: 30px
`
const ResultContainer = styled.div`
  margin: 30px
`

export default Form
