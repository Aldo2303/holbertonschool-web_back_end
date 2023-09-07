#!/usr/bin/env python3
"""
function that lists all documents in a collection
Method: def list_all(mongo_collection)
Return: empty list if no document in the collection
"""
import pymongo


def list_all(mongo_collection):
    """lists all documents in a collection"""
    if mongo_collection is None:
        return []
    return mongo_collection.find()
