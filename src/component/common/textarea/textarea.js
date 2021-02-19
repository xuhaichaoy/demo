import React from "react";
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import "./textarea.css";
class TextareaItemExample extends React.Component {
    componentDidMount() {
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className = "textareaBox">
                <List renderHeader={() => '回复海超'}>
                    <TextareaItem
                        {...getFieldProps('count', {
                            // initialValue: '',
                        })}
                        placeholder="说点什么呢..."
                        rows={3}
                        count={120}
                        className = "textarea"
                    />
                </List>

            </div>
        );
    }
}

const TextareaItemExampleWrapper = createForm()(TextareaItemExample);
export default TextareaItemExampleWrapper