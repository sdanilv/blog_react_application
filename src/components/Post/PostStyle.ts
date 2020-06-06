import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

export const postStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      flexGrow: 1,
      padding: theme.spacing(0, 3)
    },
    title: {
      maxWidth: "70vw",
      margin: "auto"
    },
    buttons: {
      float: "right",
      cursor: "pointer"
    },
    button: {
      opacity: 0.5,
      marginRight: "2px",
      "&:hover": { opacity: 1 }
    },
    body: {
      maxWidth: "80vw",
      margin: "20px",
      padding: theme.spacing(2)
    },
    fab: {
      marginLeft: "auto",
      marginTop: "10px",
      position: "absolute",
      top: 10,
      right: 25
    }
  })
);
