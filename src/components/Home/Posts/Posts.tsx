import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import { HomeProps } from "../Home";
import { postsStyle } from "./PostsStyle";
import { Divider, List, ListItem, ListItemText, Typography } from "@material-ui/core";

type PostsProps = Pick<HomeProps, "posts">
const Posts: FC<PostsProps> = (props) => {
  const style = postsStyle();

  return (
    <List className={ style.posts }>
      { props.posts.map(post => <Fragment key={ post.id }>
        <Link className={ style.noDecor } to={ `post/${post.id}` }>
          <ListItem className={ style.post } alignItems="flex-start">
            <ListItemText
              primary =
                { <Typography variant="h4" color="textPrimary" className={ style.title }>
                  { post.title } </Typography> }
              secondary={ <Typography variant="body2"
                className={ style.body } color="textPrimary">
                { post.body }
              </Typography>
              }
            />
          </ListItem>
        </Link>
        < Divider variant="fullWidth" component="li"/>
      </Fragment>
      )}
    </List>

  );
};

export default Posts;
