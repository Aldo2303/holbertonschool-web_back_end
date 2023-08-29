#!/usr/bin/env python3
"""
type-annotated function sum_list which takes a
list input_list of floats as argument
Method: sum_list
Returns: sum as a float
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """sum as a float"""
    return sum(input_list)
