import React from 'react';
import styles from './BlogPost.module.css';

export default class BlogPost extends React.Component {
    render() {
        return (
            <div className={styles.blogPostContainer}>
                <div className={styles.blogPostContainerInner}>

                    <p className={styles.blogTitle}>Sample Title</p>
                    <p className={styles.blogPublishDate}>March 5, 2020</p>
                    <div className={styles.divider}></div>

                    <div className={styles.blogPostContentLeft}>

                        <div className={styles.blogSection} style={{ marginTop: 0 }}>
                            <p className={styles.sectionHeader}>Learning Goal</p>
                            <div className={styles.sectionDivider}></div>
                            <p className={styles.sectionBody}>
                                Sample description text.
                            </p>
                        </div>

                        <div className={styles.blogSection}>
                            <p className={styles.sectionHeader}>Blog post section header</p>
                            <div className={styles.sectionDivider}></div>
                            <p className={styles.sectionBody}>
                                Create your first blog post now!
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}