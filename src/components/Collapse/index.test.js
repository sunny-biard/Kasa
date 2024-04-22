import Collapse from "./"
import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter as Router} from "react-router-dom";
import "@testing-library/jest-dom"

describe("Collapse", () => {
    it("Should render without crash", async () => {
        render(
            <Router>
                <Collapse />,
            </Router>
        )
    });

    it("Should accept props", () => {
        render(
            <Collapse label="Label Test" />
        )
        expect(screen.getByRole("heading").textContent).toBe("Label Test");
    });

    it("Should display/hide collapsible text", async () => {
        const user = userEvent.setup();
        render(
            <Router>
                <Collapse />,
            </Router>
        )
        const arrow = screen.getByRole("button");
        await act(() => user.click(arrow));
        expect(screen.getByTestId("CollapseMessage")).toBeInTheDocument();
        await act(() => user.click(arrow));
        expect(screen.queryByTestId("CollapseMessage")).not.toBeInTheDocument();
    });

    it("Should not display/hide collapsible text", async () => {
        const user = userEvent.setup();
        render(
            <Router>
                <Collapse />,
            </Router>
        )
        const label = screen.getByRole("heading");
        await act(() => user.click(label));
        expect(screen.queryByTestId("CollapseMessage")).not.toBeInTheDocument();
    });
})