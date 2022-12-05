package com.natgx.expensetrackerback.expenses.category;

import org.springframework.data.repository.Repository;

import java.util.ArrayList;
import java.util.List;

interface ExpenseCategoryRepository extends Repository<ExpenseCategory, Long> {
    List<ExpenseCategory> findAll();

}