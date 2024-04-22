import Banner from "./"
import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router} from "react-router-dom";
import "@testing-library/jest-dom"

describe("Banner", () => {
    it("Should render without crash", async () => {
        render(
            <Router>
                <Banner />,
            </Router>
        )
    })

    it("Should accept props", () => {
        render(
            <Banner message="Message Test" />
        )
        expect(screen.getByRole("heading").textContent).toBe("Message Test");
    });

    it("Should display nothing", () => {
        render(
            <Banner />
        )
        expect(screen.getByRole("heading").textContent).toBe("");
    });
})