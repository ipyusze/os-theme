import React, {Fragment} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux'
import Header from '../Layout/Body/Header'
import NotFound from '../Layout/NotFound'
import Slick from '../Widget/Slick/SingleItem'
import moment from 'moment'
import List from '../Widget/List'

const styles = theme => (
    {
        productCategory: {
            backgroundColor: theme.palette.background.paper
        },
        toolBar: {
            backgroundColor: ''
        },
    })


const mapStateToProps = state => ({
    feeds: state.feed.feeds,
});


const mapDispatchToProps = dispatch => ({}
)

class ResponsiveDialog extends React.Component {
    hasValidFeed = () => (this.props.feeds && !!this.props.feeds.find(n => n.id.toString() === this.props.match.params.id))


    render() {

        const {
            classes


        } = this.props
        if (this.hasValidFeed()) {
            const feed = this.props.feeds.find(n => n.id.toString() === this.props.match.params.id)
            return (
                <Grid container justify={'center'} className={classes.root}>
                    <Header
                        title={feed.sections[0].title}
                        route={'/'}

                    />
                    <Grid item container spacing={16} xs={12} lg={10}>
                        <Grid item xs={12} md={3}>
                            <List/>
                        </Grid>
                        <Grid item container xs={12} md={9}>
                            <Grid item container direction={'row'} alignItems={'center'} spacing={16} xs={12}>
                                <Grid item>
                                    <span className={'icon-quill'}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant={'subheading'}>
                                        {feed.authors[0].name.first + ' ' + feed.authors[0].name.last}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <span className={'icon-calendar'}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant={'subheading'}>
                                        {moment(feed.time).format('MMM Do YYYY')}
                                    </Typography>
                                </Grid>
                            </Grid>
                            {
                                feed.sections.map((n, i) =>
                                    <Fragment>
                                        <Grid item xs={10} key={i}>
                                            <Slick
                                                data={feed.sections[i].medias.map(n => ({url: n.url,}))}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant={'body1'}>
                                                {n.description}
                                            </Typography>
                                        </Grid>
                                    </Fragment>
                                )
                            }
                        </Grid>
                    </Grid>
                </Grid>
            )
        } else {
            return <NotFound
                msg={"article doesn't exist"}


            />


        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ResponsiveDialog))