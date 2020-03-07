import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostsListPage.module.css';

// Import blog posts
import { FeaturedItems } from '../BlogPosts/PostsData';

export default class PostsListPage extends React.Component {
    render() {
        var featuredItems = FeaturedItems.map((item, index) => {
            return (
                <Link to={'/blog/post/' + item.postFileName} style={{ textDecoration: 'none' }}>
                    <div className={styles.postCard}>
                        <p className={styles.postCardTitle}>{item.title}</p>
                        <p className={styles.postCardDescription}>{item.description}</p>
                    </div>
                </Link>
            )
        });

        return (
            <React.Fragment>
                <div className={styles.mainContentContainer}>
                    {/** Show all posts here */}
                    <div className={styles.postCardsContainer}>
                        <div className={styles.postCardsContainerInner}>

                            {featuredItems}

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}