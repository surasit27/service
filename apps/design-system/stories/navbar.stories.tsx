import { Navbar } from '@acme/ui/navbar'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Content inside the Navbar',
    },
  },
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Primary: Story = {
  render: (props) => <Navbar {...props} />,
  name: 'Navbar',
  args: {
    children: 'Hello',
  },
}
