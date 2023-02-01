import { InputAdornment, TextField } from "@mui/material";
import styled from "styled-components";

export const TextFirldInput = styled(TextField)(() => ({

}));
export const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
    return (
      <TextField
        {...props}
        InputProps={{
          ...InputProps,
          startAdornment: iconStart ? (
            <InputAdornment position="start" >{iconStart}</InputAdornment>
          ) : null,
          endAdornment: iconEnd ? (
            <InputAdornment position="end">{iconEnd}</InputAdornment>
          ) : null
        }}
      />
    );
  };