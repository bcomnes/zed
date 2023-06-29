import {
    NOT_ENOUGH_STATES_ERROR,
    NO_DEFAULT_OR_BASE_ERROR,
    interactive,
} from "./interactive"
import { describe, it, expect } from "vitest"

describe("interactive", () => {
    it("creates an Interactive<Element> with base properties and states", () => {
        const result = interactive({
            base: { font_size: 10, color: "#FFFFFF" },
            state: {
                hovered: { color: "#EEEEEE" },
                clicked: { color: "#CCCCCC" },
            },
        })

        expect(result).toEqual({
            default: { color: "#FFFFFF", font_size: 10 },
            hovered: { color: "#EEEEEE", font_size: 10 },
            clicked: { color: "#CCCCCC", font_size: 10 },
        })
    })

    it("creates an Interactive<Element> with no base properties", () => {
        const result = interactive({
            state: {
                default: { color: "#FFFFFF", font_size: 10 },
                hovered: { color: "#EEEEEE" },
                clicked: { color: "#CCCCCC" },
            },
        })

        expect(result).toEqual({
            default: { color: "#FFFFFF", font_size: 10 },
            hovered: { color: "#EEEEEE", font_size: 10 },
            clicked: { color: "#CCCCCC", font_size: 10 },
        })
    })

    it("throws error when both default and base are missing", () => {
        const state = {
            hovered: { color: "blue" },
        }

        expect(() => interactive({ state })).toThrow(NO_DEFAULT_OR_BASE_ERROR)
    })

    it("throws error when no other state besides default is present", () => {
        const state = {
            default: { font_size: 10 },
        }

        expect(() => interactive({ state })).toThrow(NOT_ENOUGH_STATES_ERROR)
    })
})
