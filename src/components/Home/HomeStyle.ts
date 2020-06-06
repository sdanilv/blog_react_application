import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const homeStyle = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: "relative"
    },
    fab: {
      marginLeft: "auto",
      position: "absolute",
      top: 10,
      right: 25
    }
  })
);
