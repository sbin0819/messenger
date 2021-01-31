import { useContext } from 'react';
import { ProfileContext } from '../../../state/context/profileContext';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import styled from 'styled-components';

const StyledEdit = styled.div`
  background: #fff;
  margin: 30px 40px;
  height: auto;
  min-width: 500px;
  border: 1px solid #dbdbdb;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormItem = styled.div`
  display: flex;
  width: 600px;
  height: 80px;
  margin-bottom: 10px;
`;

const StyledLabel = styled.aside`
  width: 100px;
  text-align: right;
  margin-top: 13px;
  margin-right: 30px;
`;

const StyledInputContainer = styled.div`
  display: inline-block;
  width: 360px;
  input {
    width: 100%;
    height: 40px;
  }
`;

const Edit = () => {
  const { state } = useContext(ProfileContext);
  /* 
  'onBlur', 'onChange' 모드일 때 validation 체크 submit 전에 해줌 mode 관련 참고 https://react-hook-form.com/api#useForm
  */
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });

  const onChangeUserInfo = (data) => {
    console.log(data);
  };

  return (
    <StyledEdit>
      <StyledForm onSubmit={handleSubmit(onChangeUserInfo)}>
        <FormItem>
          <StyledLabel>
            <label>이름</label>
          </StyledLabel>
          <StyledInputContainer>
            <input
              name="name"
              // defaultValue={state.name}
              ref={register({
                required: true,
                // pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            {errors.name && (
              <div className="input-error">이름을 입력해주세요</div>
            )}
            <div>
              {/* <p>이름을 입력해주세요</p> */}
              <p>
                사람들이 이름, 별명 또는 비지니스 이름 등 회원님의 알려진 이름을
                사용하여 회원님의 계정을 찾을 수 있도록 도와주세요
              </p>
            </div>
          </StyledInputContainer>
        </FormItem>
        <FormItem>
          <StyledLabel>
            <label>사용자 이름</label>
          </StyledLabel>
          <StyledInputContainer>
            <input
              name="username"
              defaultValue={state.username}
              ref={register({
                required: true,
                // pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            {errors.username && (
              <div className="input-error">사용자 이름을 입력해주세요</div>
            )}
          </StyledInputContainer>
        </FormItem>
        <FormItem>
          <StyledLabel>
            <label>웹사이트</label>
          </StyledLabel>
          <StyledInputContainer>
            <input name="website" defaultValue={state.website} ref={register} />
            {errors.website && (
              <div className="input-error">웹사이트를 입력해주세요</div>
            )}
          </StyledInputContainer>
        </FormItem>
        <FormItem>
          <StyledLabel>
            <label>소개</label>
          </StyledLabel>
          <StyledInputContainer>
            <input name="info" defaultValue={state.info} />
          </StyledInputContainer>
        </FormItem>
        <FormItem>
          <StyledLabel>
            <label>이메일</label>
          </StyledLabel>
          <StyledInputContainer>
            <input
              name="email"
              defaultValue={state.email}
              ref={register({
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            {errors.email && (
              <div className="input-error">이메일을 입력해주세요</div>
            )}
          </StyledInputContainer>
        </FormItem>
        <FormItem>
          <StyledLabel>
            <label>전화번호</label>
          </StyledLabel>
          <StyledInputContainer>
            <input
              name="phone"
              defaultValue={state.phone}
              ref={register({
                required: true,
                // pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            {errors.phone && (
              <div className="input-error">전화번호를 입력해주세요</div>
            )}
          </StyledInputContainer>
        </FormItem>
        <FormItem>
          <StyledLabel>
            <label>성별</label>
          </StyledLabel>
          <StyledInputContainer>
            <input
              name="gender"
              defaultValue={state.gender}
              ref={register}
              // ref={register({
              // required: true,
              // pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              // })}
            />
            {errors.gender && (
              <div className="input-error">성별을 입력해주세요</div>
            )}
          </StyledInputContainer>
        </FormItem>
        <div>
          <button type="submit" htmlType="submit">
            제출
          </button>
        </div>
      </StyledForm>
    </StyledEdit>
  );
};

export default Edit;
