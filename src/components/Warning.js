import React from 'react'

export const Warning = () => {
    return (
        <div className="warning">
            <h2>*_*Becareful*_*</h2>
            <ol>
                <li><p>Every time you refresh the page questions will be change.</p></li>
                <li><p>Once you select the answer remaining are hidden and you can't change your answer.</p></li>
                <li><p>After completing all the questions you will be redirected to result page.</p></li>
            </ol>
        </div>
    )
}
