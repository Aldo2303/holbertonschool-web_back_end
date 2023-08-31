#!/usr/bin/env python3
"""
Import wait_random from the previous python file that you’ve written and write
an async routine called wait_n that takes in 2 int arguments
(in this order): n and max_delay.
Return: list of all the delays
"""
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int = 0, max_delay: int = 10) -> List[float]:
    """Return list of all delays (float values) in ascending order"""
    delays = []
    for i in range(n):
        delays.append(await wait_random(max_delay))
    sorted(delays)
    return delays
