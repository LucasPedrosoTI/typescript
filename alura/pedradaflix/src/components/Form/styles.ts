import styled from "styled-components";
import Select from "../Select";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
`;

export const StyledSelect = styled(Select)`
  background: red;
  margin: 20px 0;
`;
