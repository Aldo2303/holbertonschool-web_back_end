#!/usr/bin/env python3
"""
The coroutine will collect 10 random numbers using
an async comprehensing over async_generator
"""
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    return : 10 random numbers
    """
    list = []
    list = [i async for i in async_generator()]
    return list

    """list = []
    async for i in async_generator():
        list.append(i)
    return list
    This generated the following error:
    "File contains a list comprehension".
    This error is due to your improper usage of an async for loop within
    another regular for loop in your async_comprehension function. In Python,
    you cannot nest comprehension loops, whether they are regular
    or asynchronous, in this manner."""
