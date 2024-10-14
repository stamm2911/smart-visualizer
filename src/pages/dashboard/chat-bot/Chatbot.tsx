import { useChat } from "./context/ChatContext";
import { Dispatch } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Add,
  ArrowUpward,
  Close,
  MoreVert,
  OpenInFull,
} from "@mui/icons-material";
import {
  Grid,
  IconButton,
  Drawer,
  Button,
  InputAdornment,
  TextField,
} from "@mui/material";
import { DRAWER_WIDTH } from "../chart/constants";
import { ChatBubble } from "./components";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1.5),
  height: "60px",
  boxShadow: "0px 2px 8px 0px #00000014",
}));

export const ChatBot = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { chatlog, inputText, setInputText, handleSendMessage } = useChat();
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          backgroundColor: theme.palette.common.white,
          boxShadow: "0px 12px 32px 0px #00000029",
          width: DRAWER_WIDTH,
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader>
        <Grid container justifyContent="space-between">
          <Button variant="outlined" startIcon={<Add />}>
            New Chat
          </Button>
          <Grid item>
            <IconButton>
              <OpenInFull />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
            <IconButton onClick={handleDrawerClose}>
              <Close />
            </IconButton>
          </Grid>
        </Grid>
      </DrawerHeader>
      <Grid
        container
        padding="0 16px 16px"
        height="100%"
        sx={{
          overflowY: "auto",
          maxHeight: "calc(100vh - 107px)",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#c0c0c0",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#a0a0a0",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
          },
        }}
      >
        {chatlog.map((chat, index) => (
          <ChatBubble
            key={index}
            isUser={chat.isUser}
            message={chat.message}
            timeStamp={chat.timestamp}
          />
        ))}
      </Grid>
      <Grid
        item
        container
        padding="16px"
        sx={{ borderTop: `1px solid ${theme.palette.grey[400]}` }}
      >
        <TextField
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your question here..."
          fullWidth
          multiline
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={handleSendMessage}>
                  <ArrowUpward />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Drawer>
  );
};
