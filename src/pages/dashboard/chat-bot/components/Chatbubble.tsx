import { Avatar, Grid, Typography, useTheme } from "@mui/material";

export const ChatBubble = ({
  isUser,
  message,
  timeStamp,
}: {
  isUser: boolean;
  message: string;
  timeStamp: string;
}) => {
  const theme = useTheme();

  return (
    <Grid container my={1} justifyContent={isUser ? "flex-end" : "flex-start"}>
      <Grid
        container
        alignItems="flex-end"
        sx={{
          borderRadius: "8px",
          flexDirection: isUser ? "row-reverse" : "row",
        }}
      >
        <Grid item xs={1}>
          <Avatar
            alt="user"
            sx={{ width: "24px", height: "24px" }}
            src={isUser ? undefined : "src\\assets\\img\\PharusPrimaryLogo.png"}
          />
        </Grid>
        <Grid
          item
          xs={11}
          p="8px 12px"
          sx={{
            backgroundColor: isUser
              ? theme.palette.primary.main
              : theme.palette.background.paper,
            color: isUser
              ? theme.palette.common.white
              : theme.palette.text.primary,
            borderRadius: "8px",
            textAlign: isUser ? "right" : "left",
          }}
        >
          {message}
        </Grid>
      </Grid>
      <Typography
        variant="caption"
        color="grey.700"
        sx={{ ml: isUser ? 0 : "25px", mr: isUser ? "25px" : 0 }}
      >
        {isUser ? "User" : "Pharus"} {timeStamp}
      </Typography>
    </Grid>
  );
};
