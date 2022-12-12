import { render, screen } from "@testing-library/react";
import event from "@testing-library/user-event"

import { CustomForm } from "./Form";

test("shows error when one input empty", async () => {
    const form = {
        id: 1,
        title: "",
        content: "",
        lat: "",
        long: "",
        image_url: "",
        error: "All Fields Are Required!",
    };

    render(
        <CustomForm
            content={form.content}
            formError={form.error}
            image_url={form.image_url}
            lat={form.lat}
            long={form.long}
            title={form.title}
            onSubmit={jest.fn(e => e.preventDefault())}
            onTextChange={jest.fn()}
        />
    );

    const title = screen.getByLabelText("Title*");
    const titleInput = screen.getByRole("textbox", {
        name: "Title*"
    });
    const submit = screen.getByRole('button', {
        name: /submit/i
    })
    await event.type(titleInput, "Barcelona")
    await event.click(submit)
    const err = screen.getByText(/all fields are required!/i)

    expect(title).toBeInTheDocument();
    expect(err).toBeInTheDocument();

});
