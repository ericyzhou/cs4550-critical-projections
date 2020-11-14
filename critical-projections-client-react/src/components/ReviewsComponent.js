import React from "react";
import {connect} from "react-redux";


const ReviewsComponent = (
    {

    }) =>
    <div className="container">
       <h1>Reviews</h1>
        <div className="container">
            <h3>Critic Reviews</h3>
            <ul className="list-unstyled">
                <li className="media">
                    <img src="https://cdn.britannica.com/60/71460-050-152A6481/William-Howard-Taft-constitutional-law-Kent-Yale-1921.jpg"
                         className="align-self-center mr-3" alt="..." height="80" width="80"/>
                    <div className="media-body">
                        <h3 className="mt-0 mb-1">1.6</h3>
                        <h5 className="mt-0 mb-1">Meh... The Boat Sinks</h5>
                        What the title says... pretty boring until that part. Some kind
                        of love story or something? Idk, I fell asleep.
                    </div>
                </li>
                <li className="media my-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Queen_Elizabeth_II_in_March_2015.jpg/1200px-Queen_Elizabeth_II_in_March_2015.jpg"
                         className="align-self-center mr-3" alt="..." height="80" width="80"/>
                    <div className="media-body">
                        <h3 className="mt-0 mb-1">9.8</h3>
                        <h5 className="mt-0 mb-1">Made Me Feel Emotion Again</h5>
                        When I say that this movie changed my life, I mean it!  I never thought
                        that I would cry at the theater but it was like there were thousands of
                        ninjas cutting onions.  So moving and touching.  A must watch for any
                        fans of boat romance!
                    </div>
                </li>
                <li className="media">
                    <img src="https://pbs.twimg.com/profile_images/875856217653956608/wakPGCBW_400x400.jpg"
                         className="align-self-center mr-3" alt="..." height="80" width="80"/>
                    <div className="media-body">
                        <h3 className="mt-0 mb-1">5.6</h3>
                        <h5 className="mt-0 mb-1">SCARY!!!</h5>
                        Never going on a cruise again!  They have this listed as a romance/drama.
                        I mean it when I say that this was some of the scariest $#*% that I have ever seen.
                        Legitimately caused me Thalassophobia.  I hate you James Cameron!
                    </div>
                </li>
            </ul>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="">1</a></li>
                    <li className="page-item"><a className="page-link" href="">2</a></li>
                    <li className="page-item"><a className="page-link" href="">3</a></li>
                    <li className="page-item"><a className="page-link" href="">Next</a></li>
                </ul>
            </nav>
        </div>
        <div className="container">
            <h3>General Reviews</h3>
            <ul className="list-unstyled">
                <li className="media">
                    <img src="https://vignette.wikia.nocookie.net/veggietalesitsforthekids/images/6/65/Jimmy_Gourd_%28New%29.jpg/revision/latest?cb=20120910221303"
                         className="align-self-center mr-3" alt="..." height="80" width="80"/>
                    <div className="media-body">
                        <h3 className="mt-0 mb-1">1.6</h3>
                        <h5 className="mt-0 mb-1">Meh... The Boat Sinks</h5>
                        What the title says... pretty boring until that part. Some kind
                        of love story or something? Idk, I fell asleep.
                    </div>
                </li>
                <li className="media my-4">
                    <img src="https://www.mtdemocrat.com/files/2020/05/A8_KittenWEB.jpg"
                         className="align-self-center mr-3" alt="..." height="80" width="80"/>
                    <div className="media-body">
                        <h3 className="mt-0 mb-1">9.8</h3>
                        <h5 className="mt-0 mb-1">Made Me Feel Emotion Again</h5>
                        When I say that this movie changed my life, I mean it!  I never thought
                        that I would cry at the theater but it was like there were thousands of
                        ninjas cutting onions.  So moving and touching.  A must watch for any
                        fans of boat romance!
                    </div>
                </li>
                <li className="media">
                    <img src="https://previews.123rf.com/images/katisa/katisa1710/katisa171000024/88189377-3d-render-abstract-emotional-face-icon-stupid-funny-playboy-character-cute-cartoon-monster-illustrat.jpg"
                         className="align-self-center mr-3" alt="..." height="80" width="80"/>
                    <div className="media-body">
                        <h3 className="mt-0 mb-1">5.6</h3>
                        <h5 className="mt-0 mb-1">SCARY!!!</h5>
                        Never going on a cruise again!  They have this listed as a romance/drama.
                        I mean it when I say that this was some of the scariest $#*% that I have ever seen.
                        Legitimately caused me Thalassophobia.  I hate you James Cameron!
                    </div>
                </li>
            </ul>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="">1</a></li>
                    <li className="page-item"><a className="page-link" href="">2</a></li>
                    <li className="page-item"><a className="page-link" href="">3</a></li>
                    <li className="page-item"><a className="page-link" href="">Next</a></li>
                </ul>
            </nav>
        </div>
    </div>

const stateToPropMapper = (state) => ({

})
const dispatchMapper = (dispatch) => ({

})

export default ReviewsComponent
