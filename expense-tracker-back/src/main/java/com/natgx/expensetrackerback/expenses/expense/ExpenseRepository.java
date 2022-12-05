package com.natgx.expensetrackerback.expenses.expense;

import org.springframework.data.repository.Repository;

import java.util.ArrayList;
import java.util.List;

interface ExpenseRepository extends Repository<Expense, Long> {
    void save(Expense expense);
    List<Expense> findAll();
}