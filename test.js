/* eslint-disable no-magic-numbers */
import {test} from "tap"

import lessThan from "./index"

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
