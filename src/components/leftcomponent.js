import "../styling/left.css"
function Left(){
    return (
        <div id="mainleft">
            <div id="empty">

            </div>
            <div id="nonempty">
                <div id="todo">
                    <p id="headingtodo">
                        To-Do
                    </p>
                    <input id="input" type="text" placeholder="Note down your task"/>
                    <button id="addbutton">
                        Add
                    </button>
                    <div id="todovalues">
                        <div id="val1">
                            Submit the assignment 
                            <span id="spa">
                            <i className="fa fa-close icon"></i>
                            </span>
                        </div>
                        <div id="val1">
                            Check your messages
                            <span id="spa">
                            <i className="fa fa-close icon"></i>
                            </span>
                        </div>
                        <div id="val1">
                            View latest meta character
                            <span id="spa">
                            <i className="fa fa-close icon"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div id="news">
                    <p id="headingnews">
                        Trending News
                    </p>
                    <div id="newsvalues">
                        <div id="news1">
                            <p id="news1p">
                            <span><i class="fa fa-circle-o" id="cir"></i></span> Here are 2022's Top Startups in India
                            </p>
                            <p id="bott">
                                Top news . 23,414 readers
                            </p>
                        </div>
                        <div id="news1">
                            <p id="news1p">
                            <span><i class="fa fa-circle-o" id="cir"></i></span> Making sports accessible for all
                            </p>
                            <p id="bott">
                                1d ago . 218 readers
                            </p>
                        </div>
                        <div id="news1">
                            <p id="news1p">
                            <span><i class="fa fa-circle-o" id="cir"></i></span> The pay hikes are coming
                            </p>
                            <p id="bott">
                                2d ago . 27,306 readers
                            </p>
                        </div>
                        <div id="news1">
                            <p id="news1p">
                            <span><i class="fa fa-circle-o" id="cir"></i></span> Moonlighting: Firms tweak contracts
                            </p>
                            <p id="bott">
                                1d ago . 8,228 readers
                            </p>
                        </div>
                        <p id="show">
                            Show more 
                            <span>
                                <i class="fa fa-chevron-down" id="boticon"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Left;