import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const postsStyle = makeStyles((theme: Theme) =>
  createStyles({
    noDecor: {
      textDecoration: "none"
    },
    posts: {
      margin: "auto",
      width: "100%",
      maxWidth: "80vw"
    },
    post: {
      "&:hover": {
        background: "lightgray",
        cursor: "pointer"
      }
    },
    title: {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    },
    body: {
      overflow: "hidden"
    }
  })
);
