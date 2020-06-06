import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";

export const commentStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(0, 3)
    },
    form: {
      position: "relative",
      maxWidth: "80vw",
      margin: "20px"
    },
    button: {
      position: "absolute",
      right: 0,
      bottom: 0,
      background: "none",
      opacity: 0.5,
      border: "none",
      boxShadow: "none",
      maxWidth: "10vw"
    },
    comment: {
      maxWidth: "60vw",
      margin: "auto",
      marginTop: "10px",
      padding: "7px"
    }
  })
);
