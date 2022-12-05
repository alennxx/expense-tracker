package com.natgx.expensetrackerback.expenses.expense;

import org.springframework.data.repository.Repository;

import java.util.List;

interface ExpenseRepository extends Repository<Expense, Long> {
    Expense save(Expense expense);
    List<Expense> findAll();

    boolean existsById(Long id);
    void deleteById(Long id);
}