import React, { useState } from 'react';
import ChatRoom from './ChatRoom';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'Components/ChatRoom',
    component: ChatRoom,
    argTypes: {
        onClick: { action: 'clicked' },
        onContextMenu: { action: 'context menu' },
        onLongPress: { action: 'long press' },
        onCheckboxToggle: { action: 'checkbox toggled' },
    },
} as Meta;

const Template: StoryFn = (args) => {
    const [isCheckbox, setIsCheckbox] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleLongPress = () => {
        setIsCheckbox(true);
        args.onLongPress();
    };

    const handleCheckboxToggle = (newChecked) => {
        setChecked(newChecked);
        args.onCheckboxToggle(newChecked);
    };

    return (
        <ChatRoom
            {...args}
            isCheckbox={isCheckbox}
            checked={checked}
            onLongPress={handleLongPress}
            onCheckboxToggle={handleCheckboxToggle}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    title: 'Chat Room Title',
    lastMessage: 'This is the last message in the chat room.',
    lastSentAt: new Date(),
    unreadCount: 3,
    enabled: true,
    image: '',
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
    ...Default.args,
    image: 'https://via.placeholder.com/40',
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    enabled: false,
};

export const CheckboxEnabled = Template.bind({});
CheckboxEnabled.args = {
    ...Default.args,
    isCheckbox: true,
    checked: false,
};
