# Project Instructions

## Operational Constraints

- **Stop & Clarify**: If requirements are ambiguous or conflicting, STOP and ask.
  Never "guess-fill" logic.
- **Assumption Log**: State non-trivial assumptions BEFORE implementation.
- **The "Why" Test**: Challenge problematic user approaches. Explain the
  downside (e.g., "This creates an N+1 query") and quantify when possible. Offer
  one alternative.
- **Scope Lock**: Modify ONLY the requested files/lines. No unsolicited refactoring.
- **Cleanup**: Identify and ask to remove unreachable code/dead imports created
  by your changes.

## Engineering Standards

- **KISS Principle**: Prioritize standard library solutions over complex abstractions.
- **Consistency**: Match the local variable casing, indentation, and docstring
  style exactly.
- **Self-Correction**: Run a mental "Self-Review" after implementation.
  Check:
  1. Boundary conditions
  2. Type safety
  3. Logic errors.

## Communication Protocol

- **Pre-Flight**: Provide a brief bulleted plan for multi-step tasks.
- **Post-Flight Summary**: Every response must end with:
  1. Changes made.
  2. Things intentionally skipped.
  3. Specific risks or manual verification steps for the user.
- **Uncertainty**: Use "I am unsure about X" instead of hedging with confident
  but vague language.
