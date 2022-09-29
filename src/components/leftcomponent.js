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
                    <p id="headingtodo">
                        News
                    </p>
                    <div id="todovalues">
                        <div id="val1">
                            Submit the assignment 
                            <span id="spa">
                            <i className="fa fa-arrow-right icon1"></i>
                            </span>
                        </div>
                        <div id="val1">
                            Check your messages
                            <span id="spa">
                            <i className="fa fa-arrow-right icon1"></i>
                            </span>
                        </div>
                        <div id="val1">
                            View latest meta character
                            <span id="spa">
                            <i className="fa fa-arrow-right icon1"></i>
                            </span>
                        </div>
                        <div id="val1">
                            View latest meta character
                            <span id="spa">
                            <i className="fa fa-arrow-right icon1"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Left;