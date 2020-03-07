import React from 'react';
import styles from './BlogPostPage.module.css';

export default class BlogPostPage extends React.Component {
    render() {
        let BlogPost = null;

        try {
            BlogPost = require('../BlogPosts/' + this.props.match.params.id + '/BlogPost').default;
        } catch {
            this.props.history.push('/blog');
        }

        return (
            <React.Fragment>
                <div className={styles.mainContentContainer}>
                    {/** Show blog post here */}
                    <div className={styles.blogPostContainer}>
                        {BlogPost ?
                        <BlogPost /> : null}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}