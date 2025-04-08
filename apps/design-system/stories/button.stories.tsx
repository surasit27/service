import { Button, ButtonProps } from "@acme/ui/components/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button as any,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      control: "boolean",
    },
    children: {
      control: "text",
      defaultValue: "Button",
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  } as ButtonProps,
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "default",
    children: "Delete",
  } as ButtonProps,
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
    children: "Outline",
  } as ButtonProps,
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  } as ButtonProps,
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  } as ButtonProps,
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: "🔍",
  } as ButtonProps,
};
