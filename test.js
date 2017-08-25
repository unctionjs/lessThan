/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import lessThan from "./source.js"

test(({same, end}) => {
  same(
    lessThan(0)(1),
    true
  )

  end()
})

test(({same, end}) => {
  same(
    lessThan(1)(0),
    false
  )

  end()
})
